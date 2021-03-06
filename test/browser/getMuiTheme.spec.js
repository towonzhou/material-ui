import getMuiTheme from 'styles/getMuiTheme';

describe('getMuiTheme', () => {
  // Test backward compatibility
  it('should work when we use two parameters', () => {
    const muiTheme = getMuiTheme({
      palette: {
        accent1Color: 'Colors.deepOrange500',
      },
    }, {
      userAgent: 'all',
      appBar: {
        height: 56,
      },
    });

    expect(muiTheme.userAgent).to.equal('all');
    expect(muiTheme.palette.accent1Color).to.equal('Colors.deepOrange500');
    expect(muiTheme.appBar.height).to.equal(56);
  });

  it('should work when we use one parameter', () => {
    const muiTheme = getMuiTheme({
      palette: {
        accent1Color: 'Colors.deepOrange500',
      },
      userAgent: 'all',
      appBar: {
        height: 56,
      },
    });

    expect(muiTheme.userAgent).to.equal('all');
    expect(muiTheme.palette.accent1Color).to.equal('Colors.deepOrange500');
    expect(muiTheme.appBar.height).to.equal(56);
  });

  it('should work when we mutate the muiTheme', () => {
    const muiTheme1 = getMuiTheme({
      palette: {
        accent1Color: 'Colors.deepOrange500',
      },
      userAgent: 'all',
    });

    const muiTheme2 = getMuiTheme(muiTheme1, {
      palette: {
        accent1Color: 'Colors.deepOrange600',
      },
      appBar: {
        height: 56,
      },
    });

    expect(muiTheme2.userAgent).to.equal('all');
    expect(muiTheme2.palette.accent1Color).to.equal('Colors.deepOrange600');
    expect(muiTheme2.appBar.height).to.equal(56);
  });
});
